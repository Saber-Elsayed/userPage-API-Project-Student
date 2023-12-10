
const render_intstance=new Renderer()
const Show_Data=function(){
    let API=new APIManager()
    API.get_api().then(()=>{
        render_intstance.renderer(API.data)

    })
   
}
