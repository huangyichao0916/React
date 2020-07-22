import Mock from 'mockjs';

const data = Mock.mock('mock/course/practiceCamp',{
    'practiceCamps|6':[{
        'id|+1':0,
        'img': "@Image('82x108.5','@color','@cname')",
        'title': '@ctitle',
        'name':'@cname',
        'desc': '@csentence',
        'month|1-12':1,
        'day|1-30': 10,
        'price|1000-2000':1888,
        'oldprice|2000-3000':2888
    }]
})

export default data;