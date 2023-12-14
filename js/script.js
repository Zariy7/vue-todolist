let { createApp } = Vue;

createApp({
    data() {
        return {
            todoList: [
                {
                    text: 'Walk the dog.',
                    done: true,
                },
                {
                    text: 'Buy the groceries.',
                    done: false,
                },
                {
                    text: 'Fill the car.',
                    done: true,
                },
                {
                    text: 'Pay the bills.',
                    done: false,
                },
                {
                    text: 'Wash the clothes.',
                    done: false,
                }
            ]
        }
    },
    methods: {
        listRemove(index){
            this.todoList.splice(index, 1);
        }
    }
}).mount('#app');