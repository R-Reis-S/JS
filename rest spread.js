//REST

        const user = {
            name: 'Teobaldo',
            age: 31,
            city: 'NY',
        };

        const { name, ...rest } = user;
        console.log(name);
        console.log(rest);

        //with array

        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

        const [n1, n2, n3, ...n] = array;
        console.log(n1);
        console.log(n2);
        console.log(n3);
        console.log(n);

        //with function

        function data(...params) {
            console.log(params);
        };

        data(1, 2, 3, 4, 'Teobaldo', [3, 2, 1]);

        //SPREAD

        //with object

        const user2 = { ...user, name: 'Bertano' };
        console.log(user2);


        //with array

        const array1 = [1, 2, 3];
        const array2 = [4, 5, 6];

        const array3 = [...array1, ...array2];
        console.log(array3);