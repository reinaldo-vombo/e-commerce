import { SIZES } from '@/constant/site-content';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';

const animatedComponents = makeAnimated();

const PriceSelector = () => {
   return <Select
      defaultValue={[SIZES[2], SIZES[3]]}
      isMulti
      name="size"
      components={animatedComponents}
      options={SIZES}
      className="basic-multi-select"
      classNamePrefix="select"
   />
}

export default PriceSelector
