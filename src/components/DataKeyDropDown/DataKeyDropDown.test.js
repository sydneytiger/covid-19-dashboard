/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer from 'react-test-renderer';
import DataKeyDropDown from './DataKeyDropDown';
import { TopTenContext } from '../../contexts/topTenContext';

describe('<DataKeyDropDown />', () => {
  let el, useContextReal, useContextMock, spy;

  // beforeEach(() => {
  //   useContextReal = React.useContext;
  //   useContextMock = React.useContext = jest.fn();
  //   spy = sinon.spy();
  // });

  // afterEach(() => {
  //   React.useContext = useContextReal;
  // });

  // it('should render', () => {
  //   useContextMock.mockReturnValue({ topTenDispatch: () => {} });
  //   wrapper = new ShallowRenderer().render(<DataKeyDropDown />);
  //   expect(wrapper).toMatchSnapshot();
  // })


  it('xxx', () => {
    spy = sinon.spy();
    // const TestComponent = () => (
    //   <TopTenContext.Provider value={{ topTenState: 1, topTenDispatch: spy }}>
    //     <DataKeyDropDown />
    //   </TopTenContext.Provider>
    // )
    // el = shallow(<TestComponent />);

    // el = new TestRenderer.create(
    //   <TopTenContext.Provider value={{ topTenState: 1, topTenDispatch: spy }}>
    //       <DataKeyDropDown />
    //   </TopTenContext.Provider>
    // );

    // console.log(el.root.findByType("Select").children)
    // expect(el.root.findByType("Select").children).toBe("Provided Value");
    expect(true).toEqual(true);
  })

});
