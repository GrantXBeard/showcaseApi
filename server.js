const express = require('express');
const app = express();
const cors = require('cors');
const { request, response } = require('express');

app.use(cors())

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Grants Work';
app.locals.work = [
    { id: 1, description: 'small drawing', img: 'https://i.ibb.co/Cbd59pP/IMG-3202-Large.jpg', type: 'drawing'},
    { id: 2, description: 'small mixed media collage', img: 'https://i.ibb.co/rFb3kr4/IMG-3151-Large.jpg', type: 'mixed media'},
    { id: 3, description: 'ceramic tree', img: 'https://i.ibb.co/SdJ1hWw/IMG-3019-Large.jpg', type: 'scupture'},
    { id: 4, description: 'medium collage', img: 'https://i.ibb.co/d780TM7/IMG-3089-Large.jpg', type: 'collage'},
    { id: 5, description: 'pot study', img: 'https://i.ibb.co/h1Bq4Y8/IMG-3232-Large.jpg', type: 'drawing'},
    { id: 6, description: 'small collage', img: 'https://i.ibb.co/YTPSLFR/IMG-3262-Large.jpg', type: 'collage'},
    { id: 7, description: 'small collage', img: 'https://i.ibb.co/KXdCHhh/IMG-3253-Large.jpg', type: 'collage'},
    { id: 8, description: 'medium collage', img: 'https://i.ibb.co/tZQWYzp/IMG-3187-Large.jpg', type: 'collage'},
    { id: 9, description: 'small mixed media collage', img: 'https://i.ibb.co/85KzV3m/IMG-3111-Large.jpg', type: 'mixed media'},
    { id: 10, description: 'large drawing', img: 'https://i.ibb.co/4WF0Q9p/IMG-3273-Large.jpg', type: 'drawing'},
    { id: 11, description: 'small collage', img: 'https://i.ibb.co/59XNsd5/IMG-3222-Large.jpg', type: 'collage'},
    { id: 12, description: 'painted shell', img: 'https://i.ibb.co/jLmGg1J/IMG-3011-Large.jpg', type: 'sculpture'},
    { id: 13, description: 'pot study', img: 'https://i.ibb.co/VTvD4nR/IMG-3080-Large.jpg', type: 'drawing'},
    { id: 14, description: 'small mixed media collage', img: 'https://i.ibb.co/YfXYWHX/IMG-3103-Large.jpg', type: 'mixed media'},
    { id: 16, description: 'medium drawing', img: 'https://i.ibb.co/Bcz6NW8/IMG-3195-Large.jpg', type: 'drawing'},
    { id: 17, description: 'small collage', img: 'https://i.ibb.co/TWS3jTC/IMG-3215-Large.jpg', type: 'collage'},
    { id: 18, description: 'small collage', img: 'https://i.ibb.co/FVVRn59/IMG-3245-Large.jpg', type: 'collage'},
    { id: 19, description: 'small collage', img: 'https://i.ibb.co/BCB2fzS/IMG-3264-Large.jpg', type: 'collage'},
    { id: 20, description: 'small collage', img: 'https://i.ibb.co/Lv5WVnJ/IMG-3236-Large.jpg', type: 'collage'},
    { id: 21, description: 'medium collage', img: 'https://i.ibb.co/Ht514CN/IMG-3058-Large.jpg', type: 'collage'},
    { id: 22, description: 'pot study', img: 'https://i.ibb.co/S6b8pQF/IMG-3083-Large.jpg', type: 'drawing'},
    { id: 23, description: 'large collage', img: 'https://i.ibb.co/MhNTKgb/IMG-3095-Large.jpg', type: 'collage'},
    { id: 24, description: 'medium collage', img: 'https://i.ibb.co/vkvyMzm/IMG-3192-Large.jpg', type: 'collage'},
    { id: 25, description: 'medium collage', img: 'https://i.ibb.co/hFk4L6S/IMG-3210-Large.jpg', type: 'collage'},
    { id: 26, description: 'medium mixed media collage', img: 'https://i.ibb.co/TLzTxWy/IMG-3228-Large.jpg', type: 'mixed media'},
    { id: 27, description: 'small drawing', img: 'https://i.ibb.co/Vwtbbhw/IMG-3199-Large.jpg', type: 'drawing'},
    { id: 28, description: 'small mixed media collage', img: 'https://i.ibb.co/WPCwX6D/IMG-3108-Large.jpg', type: 'mixed media'},
    { id: 29, description: 'medium drawing', img: 'https://i.ibb.co/jZNhmC9/IMG-3207-Large.jpg', type: 'drawing'},
    { id: 30, description: 'medium collage', img: 'https://i.ibb.co/K0L0FmB/IMG-3226-Large.jpg', type: 'collage'},
    { id: 31, description: 'medium collage', img: 'https://i.ibb.co/YQ67VH4/IMG-3241-Large.jpg', type: 'collage'},
    { id: 32, description: 'small collage', img: 'https://i.ibb.co/tqFK4Mv/IMG-3257-Large.jpg', type: 'collage'},
    { id: 33, description: 'small collage', img: 'https://i.ibb.co/gjFyV4G/IMG-3250-Large.jpg', type: 'collage'},
    { id: 34, description: 'small mixed media collage', img: 'https://i.ibb.co/YynjJpk/IMG-3099-Large.jpg', type: 'mixed media'},
    { id: 35, description: 'small collage', img: 'https://i.ibb.co/8bYmgpX/IMG-3247-Large.jpg', type: 'collage'},
    { id: 36, description: 'small collage', img: 'https://i.ibb.co/GH0zWQf/IMG-3238-Large.jpg', type: 'collage'},
    { id: 37, description: 'medium mixed media collage', img: 'https://i.ibb.co/0Xbd1r5/IMG-3218-Large.jpg', type: 'mixed media'},
    { id: 38, description: 'small mixed media collage', img: 'https://i.ibb.co/N9bTs5L/IMG-3017-Large.jpg', type: 'mixed media'},
    { id: 39, description: 'medium collage', img: 'https://i.ibb.co/HGh5Fg2/IMG-3049-Large.jpg', type: 'collage'},
    { id: 40, description: 'large mixed media collage', img: 'https://i.ibb.co/XyStVQP/IMG-3097-Large.jpg', type: 'mixed media'},
    { id: 41, description: 'small ceramic vase', img: 'https://i.ibb.co/m0WhbJf/IMG-3124-Large.jpg', type: 'sculpture'},
    { id: 42, description: 'small collage', img: 'https://i.ibb.co/D5fY5B1/IMG-3209-Large.jpg', type: 'collage'},
    { id: 43, description: 'small collage', img: 'https://i.ibb.co/4PRTvYP/IMG-3244-Large.jpg', type: 'collage'},
    { id: 44, description: 'small collage', img: 'https://i.ibb.co/SVNbXqZ/IMG-3261-Large.jpg', type: 'collage'},
    { id: 45, description: 'medium painting', img: 'https://i.ibb.co/phGKN76/IMG-3274-Large.jpg', type: 'painting'},
    { id: 46, description: 'small collage', img: 'https://i.ibb.co/r5p72w6/IMG-3189-Large.jpg', type: 'collage'},
    { id: 47, description: 'small ceramic vase', img: 'https://i.ibb.co/RNk2rmw/IMG-3120-Large.jpg', type: 'sculpture'},
    { id: 48, description: 'medium collage', img: 'https://i.ibb.co/bHTxF3L/IMG-3214-Large.jpg', type: 'collage'},
    { id: 49, description: 'medium collage', img: 'https://i.ibb.co/hWfQ4XC/IMG-3213-Large.jpg', type: 'collage'},
    { id: 50, description: 'medium collage', img: 'https://i.ibb.co/QcvDRdw/IMG-3227-Large.jpg', type: 'collage'},
    { id: 51, description: 'small collage', img: 'https://i.ibb.co/T48pK7b/IMG-3243-Large.jpg', type: 'collage'},
    { id: 52, description: 'small collage', img: 'https://i.ibb.co/Vqq18d8/IMG-3242-Large.jpg', type: 'collage'},
    { id: 53, description: 'small drawing', img: 'https://i.ibb.co/vDKQV5Q/IMG-3266-Large.jpg', type: 'drawing'},
    { id: 54, description: 'small collage', img: 'https://i.ibb.co/nffv8zK/IMG-3265-Large.jpg', type: 'collage'},
    { id: 55, description: 'small ceramic scuplpture', img: 'https://i.ibb.co/h9FNmZZ/IMG-3018-Large.jpg', type: 'sculpture'},
    { id: 56, description: 'large collage', img: 'https://i.ibb.co/qF9LpNW/IMG-3079-Large.jpg', type: 'collage'},
    { id: 57, description: 'medium collage', img: 'https://i.ibb.co/PwCy68D/IMG-3191-Large.jpg', type: 'collage'},
    { id: 58, description: 'small drawing', img: 'https://i.ibb.co/Hx42BX7/IMG-3198-Large.jpg', type: 'drawing'},
    { id: 59, description: 'small drawing', img: 'https://i.ibb.co/RDMdTp3/IMG-3205-Large.jpg', type: 'drawing'},
    { id: 60, description: 'medium collage', img: 'https://i.ibb.co/tHQFDvh/IMG-3220-Large.jpg', type: 'collage'},
    { id: 61, description: 'medium collage', img: 'https://i.ibb.co/rkqYF9f/IMG-3231-Large.jpg', type: 'collage'},
    { id: 62, description: 'small collage', img: 'https://i.ibb.co/NLGmRqL/IMG-3246-Large.jpg', type: 'collage'},
    { id: 63, description: 'small collage', img: 'https://i.ibb.co/wpDgJ7j/IMG-3252-Large.jpg', type: 'collage'},
    { id: 64, description: 'small collage', img: 'https://i.ibb.co/Rbmnhb1/IMG-3251-Large.jpg', type: 'collage'},
    { id: 65, description: 'small collage', img: 'https://i.ibb.co/N6PWj0n/IMG-3263-Large.jpg', type: 'collage'},
    { id: 66, description: 'small collage', img: 'https://i.ibb.co/9HmZwgR/IMG-3256-Large.jpg', type: 'collage'},
    { id: 67, description: 'small drawing', img: 'https://i.ibb.co/8Ycv3FP/IMG-3020-Large.jpg', type: 'drawing'},
    { id: 68, description: 'medium collage', img: 'https://i.ibb.co/rffCzXf/IMG-3053-Large.jpg', type: 'collage'},
    { id: 69, description: 'medium ceramic vase', img: 'https://i.ibb.co/FBBXCrs/IMG-3119-Large.jpg', type: 'sculpture'},
    { id: 70, description: 'small collage', img: 'https://i.ibb.co/QvHJwYG/IMG-3190-Large.jpg', type: 'collage'},
    { id: 71, description: 'small drawing', img: 'https://i.ibb.co/FH7nbmd/IMG-3204-Large.jpg', type: 'drawing'},
    { id: 72, description: 'medium collage', img: 'https://i.ibb.co/B4gg9fv/IMG-3217-Large.jpg', type: 'collage'},
    { id: 73, description: 'small collage', img: 'https://i.ibb.co/9gwNDrV/IMG-3240-Large.jpg', type: 'collage'},
    { id: 74, description: 'small collage', img: 'https://i.ibb.co/BjXXrny/IMG-3260-Large.jpg', type: 'collage'},
    { id: 75, description: 'small collage', img: 'https://i.ibb.co/jGww7Cd/IMG-3255-Large.jpg', type: 'collage'},
    { id: 76, description: 'small collage', img: 'https://i.ibb.co/Lzbwvfk/IMG-3248-Large.jpg', type: 'collage'},
    { id: 77, description: 'small drawing', img: 'https://i.ibb.co/JxJ9FJL/IMG-3234-Large.jpg', type: 'drawing'},
    { id: 78, description: 'medium collage', img: 'https://i.ibb.co/gyfwpYJ/IMG-3219-Large.jpg', type: 'collage'},
    { id: 79, description: 'small collage', img: 'https://i.ibb.co/XbLNvDt/IMG-3259-Large.jpg', type: 'collage'},
    { id: 80, description: 'small collage', img: 'https://i.ibb.co/M5rvpK4/IMG-3254-Large.jpg', type: 'collage'},
    { id: 81, description: 'medium mixed media collage', img: 'https://i.ibb.co/ncV4X6H/IMG-3074-Large.jpg', type: 'mixed media'},
    { id: 82, description: 'small mixed media collage', img: 'https://i.ibb.co/xXJyQFW/IMG-3110-Large.jpg', type: 'mixed media'},
    { id: 83, description: 'medium collage', img: 'https://i.ibb.co/LRjK1c1/IMG-3194-Large.jpg', type: 'collage'},
    { id: 84, description: 'medium collage', img: 'https://i.ibb.co/NrQ0rf6/IMG-3235-Large.jpg', type: 'collage'},
    { id: 85, description: 'small collage', img: 'https://i.ibb.co/fdjGP72/IMG-3249-Large.jpg', type: 'collage'},
    { id: 86, description: 'large collage', img: 'https://i.ibb.co/DzYXM34/IMG-3239-Large.jpg', type: 'collage'},
    { id: 87, description: 'small collage', img: 'https://i.ibb.co/xMYFZhV/IMG-3237-Large.jpg', type: 'collage'},
    { id: 88, description: 'medium drawing', img: 'https://i.ibb.co/3kVWsm9/IMG-3230-Large.jpg', type: 'drawing'},
    { id: 89, description: 'small drawing', img: 'https://i.ibb.co/Bgcs1BN/IMG-3201-Large.jpg', type: 'drawing'},
    { id: 90, description: 'medium mixed media collage', img: 'https://i.ibb.co/PTvrPTD/IMG-3193-Large.jpg', type: 'mixed media'},
    { id: 91, description: 'small collage', img: 'https://i.ibb.co/bWNHVmd/IMG-3188-Large.jpg', type: 'collage'},
    { id: 92, description: 'medium collage', img: 'https://i.ibb.co/g9zKfvz/IMG-3196-Large.jpg', type: 'collage'},
    { id: 93, description: 'medium mixed media collage', img: 'https://i.ibb.co/7GRfwP6/IMG-3224-Large.jpg', type: 'mixed media'},
    { id: 94, description: 'medium mixed media collage', img: 'https://i.ibb.co/HzkDSYH/IMG-3186-Large.jpg', type: 'mixed media'},
    { id: 95, description: 'large mixed media drawing', img: 'https://i.ibb.co/wRZ5tj9/IMG-3094-Large.jpg', type: 'mixed edia'},
    { id: 96, description: 'large mixed media collage', img: 'https://i.ibb.co/VgSkxPD/IMG-3088-Large.jpg', type: 'mixed media'},
    { id: 97, description: 'small mixed media collage', img: 'https://i.ibb.co/QnHF43v/IMG-3109-Large.jpg', type: 'mixed media'},
    { id: 98, description: 'medium mixed media collage', img: 'https://i.ibb.co/HKwzP4z/IMG-3076-Large.jpg', type: 'mixed media'},
    { id: 99, description: 'large mixed media collage', img: 'https://i.ibb.co/bz0WtDk/IMG-3087-Large.jpg', type: 'mixed media'},
    { id: 100, description: 'small mixed media collage', img: 'https://i.ibb.co/VLLGHw6/IMG-3107-Large.jpg', type: 'mixed media'},
    { id: 101, description: 'small mixed media collage', img: 'https://i.ibb.co/Tk6RJd9/IMG-3106-Large.jpg', type: 'mixed media'},
    { id: 102, description: 'large mixed media collage', img: 'https://i.ibb.co/BZLjP1Z/IMG-3096-Large.jpg', type: 'mixed media'},
    { id: 103, description: 'small mixed media collage', img: 'https://i.ibb.co/MfNYWxW/IMG-3105-Large.jpg', type: 'mixed media'},
    { id: 104, description: 'large drawing', img: 'https://i.ibb.co/Rg9GZqS/IMG-3092-Large.jpg', type: 'drawing'},
    { id: 105, description: 'small mixed media collage', img: 'https://i.ibb.co/gDqZQRc/IMG-3104-Large.jpg', type: 'mixed media'},
    { id: 106, description: 'large mixed media collage', img: 'https://i.ibb.co/b6bFfjg/IMG-3091-Large.jpg', type: 'mixed media'},
    { id: 107, description: 'large mixed media drawing', img: 'https://i.ibb.co/VQg70vs/IMG-3082-Large.jpg', type: 'mixed media'},
    { id: 109, description: 'large mixed media collage', img: 'https://i.ibb.co/S7GybCq/IMG-3085-Large.jpg', type: 'mixed media'},
    { id: 110, description: 'large mixed media collage', img: 'https://i.ibb.co/fS2zw3W/IMG-3084-Large.jpg', type: 'mixed media'},
    { id: 111, description: 'medium collage', img: 'https://i.ibb.co/cc6mvpP/IMG-3233-Large.jpg', type: 'collage'},
    { id: 112, description: 'medium collage', img: 'https://i.ibb.co/mXXnJJf/IMG-3229-Large.jpg', type: 'collage'},
    { id: 113, description: 'medium mixed media collage', img: 'https://i.ibb.co/9vdpZcH/IMG-3223-Large.jpg', type: 'mixed media'},
    { id: 114, description: 'small collage', img: 'https://i.ibb.co/85PXBFS/IMG-3216-Large.jpg', type: 'collage'},
    { id: 115, description: 'small collage', img: 'https://i.ibb.co/QnmvxmQ/IMG-3212-Large.jpg', type: 'collage'},
    { id: 116, description: 'medium collage', img: 'https://i.ibb.co/YXGcscQ/IMG-3211-Large.jpg', type: 'collage'},
    { id: 117, description: 'small cermaic vase', img: 'https://i.ibb.co/c29xHRd/IMG-3123-Large.jpg', type: 'sculpture'},
    { id: 118, description: 'medium mixed media collage', img: 'https://i.ibb.co/qMfD6Ms/IMG-3086-Large.jpg', type: 'mixed media'},
    { id: 119, description: 'medium mixed media collage', img: 'https://i.ibb.co/VVwG5nC/IMG-3208-Large.jpg', type: 'mixed media'},
    { id: 120, description: 'small drawing', img: 'https://i.ibb.co/MhPHf0v/IMG-3200-Large.jpg', type: 'drawing'},
    { id: 122, description: 'medium mixed media collage', img: 'https://i.ibb.co/7g0KNpQ/IMG-3197-Large.jpg', type: 'mixed media'},
    { id: 123, description: 'small drawing', img: 'https://i.ibb.co/PCg1SBq/IMG-3203-Large.jpg', type: 'drawing'},
    { id: 124, description: '', img: 'https://i.ibb.co/NpjMstz/DSC-2575.jpg', type: 'photography'},
    { id: 125, description: '', img: 'https://i.ibb.co/8MgRccS/DSC-2214.jpg', type: 'photography'},
    { id: 126, description: '', img: 'https://i.ibb.co/7VQznqt/DSC-4818.jpg', type: 'photography'},
    { id: 127, description: '', img: 'https://i.ibb.co/YTSwRxY/DSC-4408.jpg', type: 'photography'},
    { id: 128, description: '', img: 'https://i.ibb.co/vxq6b3y/DSC-4721.jpg', type: 'photography'},
    { id: 129, description: '', img: 'https://i.ibb.co/68vf0nM/DSC-4475.jpg', type: 'photography'},
    { id: 130, description: '', img: 'https://i.ibb.co/QmSBFtC/DSC-3768.jpg', type: 'photography'},
    { id: 131, description: '', img: 'https://i.ibb.co/6NKd0d4/DSC-2159.jpg', type: 'photography'},
    { id: 132, description: '', img: 'https://i.ibb.co/68tq8Cx/DSC-4550.jpg', type: 'photography'},
    { id: 133, description: '', img: 'https://i.ibb.co/q1WJJTF/DSC-4199.jpg', type: 'photography'},
    { id: 134, description: '', img: 'https://i.ibb.co/Db89xtP/DSC-4241.jpg', type: 'photography'},
    { id: 135, description: '', img: 'https://i.ibb.co/CJTVBBf/DSC-4489.jpg', type: 'photography'},
    { id: 136, description: '', img: 'https://i.ibb.co/Dbmctwk/DSC-4708.jpg', type: 'photography'},
    { id: 137, description: '', img: 'https://i.ibb.co/KV7p5gp/DSC-4488.jpg', type: 'photography'},
    { id: 138, description: '', img: 'https://i.ibb.co/1vKv9Vk/DSC-4996.jpg', type: 'photography'},
    { id: 139, description: '', img: 'https://i.ibb.co/YTznCG7/DSC-4697.jpg', type: 'photography'},
    { id: 140, description: '', img: 'https://i.ibb.co/9sYw2Kw/DSC-4231.jpg', type: 'photography'},
    { id: 141, description: '', img: 'https://i.ibb.co/ysjZKsx/DSC-4374.jpg', type: 'photography'},
    { id: 142, description: '', img: 'https://i.ibb.co/p4sMRPz/DSC-1584.jpg', type: 'photography'},
  ] 
// { id: , description: '', img: '', type: ''},




app.get('/', (request, response) => {
  response.send('Grants Work');
  console.log("hi")
});

app.get('/api/v1/work', (request, response) => {
    const { work } = app.locals
    response.json({ work })
    console.log("hello")
  });

app.get('/api/v1/work/:type', (request, response) => {
    const { type } = request.params;
    const { medium } = app.locals.work.filter(item => item.type === type);
    response.status(200).json({ medium })
    console.log("howdy")
    })

app.post('/api/v1/work', (request, response) => {
  app.locals.work.push(request.body)
  response.status(201).json(request.body)
}) 

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});





