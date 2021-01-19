class employee
        {
            constructor(namez,salary)
            {
                this.name=namez;
                this.earnings=salary;
            }
        }
        class sample extends employee{
            constructor(namez,salary,perks)
            {
                super(namez,salary);
                this.march=perks;
            }
        }
        let r=new sample("asp",91000,123);
        console.log(r)
