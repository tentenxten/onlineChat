var request = require('request');
describe('get message',()=>{
    it('should return 200 ok',()=>{
        request.get('https://compassionate-jennings-1d9db6.netlify.com/messages',(err,res)=>{
            console.log(res);
            expect(res.statusCode).toEqual(200);
            done();
        })
    })

    it('should return a list, thats not empty',()=>{
        request.get('https://compassionate-jennings-1d9db6.netlify.com/messages',(err,res)=>{
            expect(res.body.length).toBeGreaterThan(0)
            done();
        })
    })
})

describe('get message from user',()=>{
    it('should return 200 ok',()=>{
        request.get('https://compassionate-jennings-1d9db6.netlify.com//messages/tim',(err,res)=>{
            console.log(res);
            expect(res.statusCode).toEqual(200);
            done();
        })
    })
    it('name should be tim',(done)=>{
        request.get('https://compassionate-jennings-1d9db6.netlify.com//messages/tim',(err,res)=>{
            console.log(res);
            expect(JSON.parse(res.body)[0].name).toEqual('tim');
            done();
        })
    })
})

