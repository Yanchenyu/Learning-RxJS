const observer = {
    next: (res) => {
        console.log(res);
    },
    error: (err) => {
        console.log('error: ', err);
    },
    complete: () => {
        console.log('complete!');
    }
};

export default observer