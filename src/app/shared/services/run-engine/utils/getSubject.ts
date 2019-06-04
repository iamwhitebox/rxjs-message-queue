function getSubject<Array, type>(subjects, name): string {
    const res = subjects.filter(s => s.name === name);
    if (!res || res.length < 1) {
        return undefined;
    }
    return res[0];
};

export { getSubject };
