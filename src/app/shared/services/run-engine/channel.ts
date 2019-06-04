import { AsyncSubject, of } from 'rxjs';
import { ExtendedSubject, ExtendedReplaySubject } from './rx';
import { getSubject, compareTopics } from './utils';

import 'rxjs/add/operator/publishReplay';

class Channel {
    constructor(plugins = []) {

        this.utils = {
            getSubject,
            compareTopics
        };

        this.subjects = [];
        this.channelBus = new ExtendedReplaySubject();
        this.channelStream = this.channelBus.publishReplay().refCount();

        plugins.map(this.registerPlugin.bind(this));
    }

    utils;
    subjects;
    channelBus;
    channelStream;

    subject(name, { Subject = ExtendedSubject } = {}) {
        let s = this.utils.getSubject(this.subjects, name);
        if (!s) {
            s = new Subject();
            s.name = name;
            this.subjects.push(s);
            this.channelBus.next(s);
        }
        return s;
    }

    observe(name) {
        if (name.indexOf('#') === -1 && name.indexOf('*') === -1) {
            return this.subject(name);
        }
        return this.channelStream.filter(obs => compareTopics(obs.name, name)).mergeAll();
    }

    request({ topic, data, Subject = AsyncSubject }) {
        const subj = this.utils.getSubject(this.subjects, topic);
        if (!subj) {
            return of({});
        }

        const replySubject = new Subject();
        subj.next({ replySubject, data });
        return replySubject;
    }

    registerPlugin(plugin) {
        for (const prop in plugin) {
            if (!this.hasOwnProperty(prop)) {
                this[prop] = plugin[prop];
            }
        }
    }
}

export default Channel;
