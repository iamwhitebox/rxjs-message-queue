import { ReplaySubject } from 'rxjs';

class ExtendedReplaySubject extends ReplaySubject<any> {
    observers;

    complete() { }

    error(error) {
        this.error = error;
        this.observers.forEach(os => {
            os.error(error);
            os.isStopped = false;
        });
    }
}

export { ExtendedReplaySubject };
