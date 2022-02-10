

const age =[18,20,45,1,80,90,100];
const predicate= (age:number)=> {
    return age>90;
};

const cources = [
    {title: 'css', price: 100},
    {title: 'js', price: 300},
    {title: 'react', price: 150}
]
type ChepPredicatsType = {
    title: string
    price: number   
}
    
const ChepPredicate =(course: ChepPredicatsType)=>  {
    return ( course.price <160)
};
