((utils)=>{
    const app={
        htmlElements:{
            form: document.querySelector('#fibonacci'),
            input: document.querySelector('#num1'),
            response: document.querySelector('#response') 
        },
        init: ()=>{
            app.htmlElements.form.addEventListener('submit', app.handlers.onFormSubmit);
            app.htmlElements.response.addEventListener('click', app.handlers.onCardClick);
        },
        utils: {
            ... utils.methods,
        },
        templates: {
            card: (b) => {
               return '<div class="card">$b</div>';//${b}
            }
        },
        handlers: {
            onCardClick:(e)=>{
                if(e.target.className === 'card'){
                        e.target.remove();
                }
            },
            onFormSubmit:(e)=>  {
                e.preventDefault();

                app.htmlElements.response.innerHTML='';

                const a= app.htmlElements.input.value;
                app.utils.fibonacci(a).forEach(value => {
                    app.htmlElements.response.innerHTML += app.templates.card(value);
                });
            }
        }     
    };
    app.init();
})(document.utils);