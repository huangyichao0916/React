import Mock from 'mockjs';

const data = Mock.mock('/mock/course',{
    'courses|10':[{
        'id|+1':0,
        "img":"@Image('100x100','@color','@cname')",
        'title':'@cname',
        'price|10-99':20,
        'type|1':['Java工程师','Python工程师','计算机基础知识','前端工程师','测试工程师','架构师','iOS工程师'],
        'teacherName':'@cname',
        'totalChapters|10-30':11,
    }]
})

export default data;