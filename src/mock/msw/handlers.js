import { http, graphql, HttpResponse } from 'msw'

export const handlers = [
    http.get('/name', () => {
        return HttpResponse.json({
            name: "zeriong"
        })
    }),
    graphql.query('ListMovies', () => {
        return HttpResponse.json({
            data: {
                movies: [
                    {
                        title: 'The Lord of The Rings',
                    },
                    {
                        title: 'The Matrix',
                    },
                    {
                        title: 'Star Wars: The Empire Strikes Back',
                    },
                ],
            },
        })
    }),
]