export default {
    async registerCoach(context, data) {
        const userId = context.rootGetters.userId;

        const coachData = {
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            houlyRate: data.rate,
            areas: data.areas
        };

        const res = await fetch(`https://vue-http-demo-de534-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
            method: 'PUT',
            body: JSON.stringify(coachData)
        });

        // const resData = await res.json();

        if (!res.ok) {
            // error handling
        }



        context.commit('registerCoach', {
            ...coachData,
            id: userId
        });
    },
    async loadCoaches(context) {
        const res = await fetch(`https://vue-http-demo-de534-default-rtdb.firebaseio.com/coaches.json`);

        const resData = await res.json();
        if (!res.ok) {
            //  error handling
            const error = new Error(resData.message || 'Failed to fetch.');
            throw error;
        }

        const coaches = [];

        for (const key in resData) {
            const coach = {
                firstName: resData[key].firstName,
                lastName: resData[key].lastName,
                description: resData[key].description,
                houlyRate: resData[key].houlyRate,
                areas: resData[key].areas
            };
            coaches.push(coach);
        }
        context.commit('setCoaches', coaches);
    }
};