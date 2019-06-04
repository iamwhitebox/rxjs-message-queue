import { Subject } from 'rxjs';

class ExtendedSubject extends Subject<any> {
    observers: any;
    thrownError: Error;

    complete() { }

    error(error) {
        this.thrownError = error;
        this.observers.forEach(os => {
            os.destination._error.call(os.destination._context, error);
        });
    }
}

export { ExtendedSubject };
