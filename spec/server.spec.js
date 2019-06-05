var request = require('request');
describe('get message',()=>{
    it('should return 200 ok',()=>{
        request.get('http://localhost:3000/messages',(err,res)=>{
            console.log(res);
            expect(res.statusCode).toEqual(200);
            done();
        })
    })

    it('should return a list, thats not empty',()=>{
        request.get('http://localhost:3000/messages',(err,res)=>{
            expect(res.body.length).toBeGreaterThan(0)
            done();
        })
    })
})

describe('get message from user',()=>{
    it('should return 200 ok',()=>{
        request.get('http://localhost:3000/messages/tim',(err,res)=>{
            console.log(res);
            expect(res.statusCode).toEqual(200);
            done();
        })
    })
    it('name should be tim',(done)=>{
        request.get('http://localhost:3000/messages/tim',(err,res)=>{
            console.log(res);
            expect(JSON.parse(res.body)[0].name).toEqual('tim');
            done();
        })
    })
})

