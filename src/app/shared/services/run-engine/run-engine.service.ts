import { Injectable } from '@angular/core';
import Channel from './channel';

@Injectable({
  providedIn: 'root'
})
export class RunEngineService {

  channels = {};
  channelPlugins = [];

  constructor() {
    this.channels = {};
  }

  channel(name = 'default') {
    if (!this.channels[name]) {
      this.channels[name] = new Channel(this.channelPlugins);
    }
    return this.channels[name];
  }

  registerPlugin(plugin) {
    for (const prop in plugin) {
      if (!this.hasOwnProperty(prop)) {
        this[prop] = plugin[prop];
      }
    }
  }

  registerChannelPlugin(plugin) {
    this.channelPlugins.push(plugin);
    for (const name in this.channels) {
      if (this.channels.hasOwnProperty(name)) {
        this.channels[name].registerPlugin(plugin);
      }
    }
  }
}
