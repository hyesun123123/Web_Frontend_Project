import { http, HttpResponse } from 'msw'

const todos = [
    'eating','sleeping','playing'
];

export const handlers = [
    http.get('/api/todos', ({ request, params, cookies })=>{
        console.log(request)
        console.log(params)
        console.log(cookies)
        return HttpResponse.json(todos)
    }),
    http.post('/api/todos', ({ request, params, cookies })=>{
        if (request.body !== null && typeof request.body === 'object') {
            // If it's an object, assume it's a ReadableStream<Uint8Array> and convert it to a string
            return request.json().then((data: any) => {
              todos.push(data);
        
              return new Response(null, {
                status: 200,
              });
            });
          }

        return new Response(null, {
            status: 200}
        )
    })
]