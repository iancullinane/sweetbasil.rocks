var config = {};

config.name = "Sweet Basil";
config.title = "Sweet Basil Radio";
config.author ="Ian Cullinane <ian@iancullinane.com>";
config.description = "Get yer tunes on"
config.keywords = "music"
config.df_image = {
    image: "cowboy.jpg",
    artist: "Ashley Holzwazzer",
    medium: "Ink and Marker",
    title: "Roll me one of those...",
    link: "https://www.instagram.com/ahhdraws/?hl=en"

};
config.layout = {
    title: "Sweet Basil Radio",
    user: {
        name: "Ian Cullinane",
        contact: "ian.cullinane@gmail.com"
    }
};
// config.default_stuff =  ['red','green','blue','apple','yellow','orange','politics'];
config.port = process.env.DEPLOY_PORT || 8888;

module.exports = config;
