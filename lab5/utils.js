(()=>{
   const utils={
    methods: {
           fibonacci: (n) => {
            const fibon=[];
            fibon[0] = 0;
            fibon[1] = 1;
                 for (let i = 2; i < n; i++) {
                    fibon[i] = fibon[i - 2] + fibon[i - 1];   
                    fibon.push(i);
                }
                return fibon;
            }
       }    
    }
    document.utils=utils;
})();