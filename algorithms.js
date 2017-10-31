export function createItems(count) {
    console.log(`Creating ${count} item array`);
    const items = new Array(count).fill({counter: 0});
    return items;
}

export function createWastefulLoop(items) {
    return function waste() {
        console.log('Wasteful increment');

        for (let i = 0; i < items.length; i++) {
            items[i] = {
                counter: items[i].counter + 1,
            };
        }
    };
}

export function createConservativeLoop(items) {
    return function conserve() {
        console.log('Conservative increment');

        for (let i = 0; i < items.length; i++) {
            items[i].counter = items[i].counter + 1;
        }
    };
}
