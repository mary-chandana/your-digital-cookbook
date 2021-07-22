var mongoose  = require("mongoose");
var Recipe    = require("./models/recipe");
var Comment   = require("./models/comment");

var data = [
    {
        name: "MOTHAGAM", 
        image: "https://www.kannammacooks.com/wp-content/uploads/2015/09/mothagam-sweet-kozukattai-ganesh-chaturthi.jpg",
        instruction: "Wash 1/2 cup of raw rice in water for 2-3 times. Soak the washed rice in 1/2 cup of water. Let it soak for a minimum of one hour. Grind the rice in the mixie along with the water used for soaking rice. Do not use extra water. You should grind it to a very smooth paste. Set aside. Heat the remaining half a cup of water in a pan until boiling. Add in the oil and the salt. Add in the rice paste and mix well continously until it forms a very thick paste. Remove off heat. cover with a pan and set aside."
    },
    {
        name: "COCONUT POLI RECIPE", 
        image: "https://www.kannammacooks.com/wp-content/uploads/coconut-poli-thengai-poli.jpg",
        instruction: "Boil the jaggery with little water (about 1/4 cup) till it completely melts. Add in the fresh shredded coconut and cardamom powder. Saute till the mixture thickens. Set aside to cool. Make into small lime sized balls and set aside on a plate. Apply oil generously to your hands and take a small maida dough and place it on a wax paper. Start patting the dough to form a circle. Place the pooranam / stuffing ball in the middle of the dough and start covering the dough by pinching in the top. Apply oil to your hands and start pressing the ball gently to spread. Gently keep pressing the dough to evenly spread and form a circle."
    },
    {
        name: "PARUPPU POLI", 
        image: "https://www.kannammacooks.com/wp-content/uploads/paruppu-poli-paruppu-obbattu.jpg",
        instruction: "Apply oil generously to your hands and take a small dough and place it on a wax paper. Start patting the dough to form a circle. Place the pooranam / stuffing ball in the middle of the dough and start covering the dough by pinching in the top. Apply oil to your hands and start pressing the ball gently to spread. Gently keep pressing the dough to evenly spread and form a circle. Set a griddle on heat on medium flame and place the obbattu and sprinkle some oil or ghee. Cook for a minute on each side"
    }
]

function seedDB(){
   //Remove all recipes
   Recipe.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed recipes!");
         //add a few recipes
        data.forEach(function(seed){
            Recipe.create(seed, function(err, recipe){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a recipe");
                    //create a comment
                    Comment.create(
                        {
                            text: "This recipe is delicious",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                recipe.comments.push(comment);
                                recipe.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
    //add a few comments
}

module.exports = seedDB;
