// this file is for functions that I need a lot so that I can easily import them into any project

const Rng = {

    float : function(floor, ceiling) {

        return (Math.random() * (ceiling - floor)) + floor;
    
    },

    int : function(floor, ceiling) {

        return Math.floor(Rng.float(floor, ceiling));
    
    }

}
