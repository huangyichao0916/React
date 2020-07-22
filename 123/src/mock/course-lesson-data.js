import Mock from 'mockjs';

const data = Mock.mock('/mock/course/lesson',{
    'courses|100':[{
        'id|+1':0,
        "img":"@Image('100x100','@color','@cname')",
        'title':'@cname',
        'price|10-99':20,
        'type|1':['Java工程师','Python工程师','计算机基础知识','前端工程师','测试工程师','架构师','iOS工程师'],
        'course_direction|1':['计算机专业课','后端&架构','前端&移动','产品&运营','人工智能&大数据','运维&测试','管理&效率','职场软技能','面试专场'],
        'teacherName':'@cname',
        'totalChapters|10-30':11,
        'isPurchased':false,
    }]
})

export default data;