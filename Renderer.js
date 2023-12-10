
class Renderer {
    renderer(data){
        console.log(data)
        $(".user-container").empty()
        $(".friends-container").empty()
        $(".quote-container").empty()
        $(".pokemon-container").empty()
        $(".meat-container").empty()
        let users=data[0]
        let kanye=data[1]
        let pokemon=data[2]
        let bacon=data[3]
       
       
            let first_name=users.results[0].name.first
            let last_name=users.results[0].name.last
            let title=users.results[0].name.title
            let img=users.results[0].picture.large
            let friend1=users.results[1].name.first+" "+users.results[1].name.last
            let friend2=users.results[2].name.first+" "+users.results[2].name.last
            let friend3=users.results[3].name.first+" "+users.results[3].name.last
            let friend4=users.results[4].name.first+" "+users.results[4].name.last
            let friend5=users.results[5].name.first+" "+users.results[5].name.last
            let friend6=users.results[6].name.first+" "+users.results[6].name.last
            $(".user-container").append("<img src="+ img+" id=profile-pic>")
            $(".user-container").append("<div>"+title+" " +first_name+" "+last_name +"<div/>")
            $(".friends-container").append("<div>"+friend1+"<div/>")
            $(".friends-container").append("<div >"+friend2+"<div/>")
            $(".friends-container").append("<div>"+friend3+"<div/>")
            $(".friends-container").append("<div>"+friend4+"<div/>")
            $(".friends-container").append("<div>"+friend5+"<div/>")
            $(".friends-container").append("<div>"+friend6+"<div/>")

        $(".quote-container").append("<div>Favorite quote:<div/>",
        "<p >"+kanye.quote +"<p/>")
        
    
        console.log(pokemon)
        console.log(pokemon.name)
        let img_pokemon=pokemon.sprites.front_default
        $(".pokemon-container").append("<img src="+img_pokemon+" id=pokemon-image >", "<span>"+"Pokemon:"+" "+ pokemon.name+"<span/>")


        
        $(".meat-container").append("<p>About me: <p>","<div>"+bacon[0] +"<div/>")


    }
}