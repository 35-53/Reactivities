interface Duck{
    
}

const duck1={
    name:"kevin",
    numlegs: 2,
    makeSound: (sound : string) => console.log(sound)
}

const duck2={
    name:"ken",
    numlegs: 2,
    makeQuack: () => console.log('quak')
}

duck1.makeSound('quack');
duck2.makeQuack();
duck1.name = '23'

export const ducks=[duck1,duck2]