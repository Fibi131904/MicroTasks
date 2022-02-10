test('should take older then 90', ()=> {
    const ages =[18,20,45,1,80,90,100]; 

    const predicate= (age:number)=> {
        return age>90;
    };
    const oldAges= ages.filter(predicate);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);

}

)