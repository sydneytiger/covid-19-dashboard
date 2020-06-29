import React, {useState, useCallback} from 'react'
import Title from '../Title';
import Banner from './Banner';
import Increacer from './Increacer';

function UseCallbackComponent() {
  const [age, setAge] = useState(30);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age])

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary])

  return (
    <>
    <Title text="useCallback"></Title>
    <div className="center">
      <p>
        useCallback prevents action function from unecessary re-render. The usage of 
        useCallback similars to useEffect. It use the dependency array to track the props.
        And return a action function. 
      </p>
      <p>
        It addresses the performance issue.
      </p>


      <Banner text="Age" value={age} />
      <Increacer text="Age" clickAction={incrementAge} />

      <Banner text="Salary" value={salary} />
      <Increacer text="Salary" clickAction={incrementSalary} />
    </div>
    </>
  )
}

export default UseCallbackComponent
