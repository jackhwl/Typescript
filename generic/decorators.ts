@classDecorator
class Boat {
    @testDecorator
    color: string = 'red';

    @testDecorator
    get formattedColor(): string {
        return `This boats color is ${this.color}`;
    }

    @logError('Oops, boat was sunk')
    pilot(@parameterDecorator speed: string, @parameterDecorator generateWake: boolean): void {
        throw new Error();
        console.log('swish')
    }
}

function classDecorator(constructor: typeof Boat) {
    console.log(constructor)
}

function parameterDecorator(target: any, key: string, index: number) {
    console.log(target)
    console.log(key)
    console.log(index)
}

function testDecorator(target: any, key: string) {
    console.log(target)
    console.log(key)
}

function logError(errorMessage: string) {
    return function (target: any, key: string, desc: PropertyDescriptor): void {
        const method = desc.value;

        desc.value = function() {
            try {
                method();
            } catch(e) {
                console.log(errorMessage);
            }
        }
    }
}
//new Boat().pilot();