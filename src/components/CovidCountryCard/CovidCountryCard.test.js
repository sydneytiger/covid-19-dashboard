/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import CovidCountryCard from './CovidCountryCard';

const testData = {
  updated:1594205402819,
  country:"Australia",
  iso2:"AU",
  iso3:"AUS",
  flag:"https://disease.sh/assets/img/flags/au.png",
  cases:8886,
  todayCases:131,
  deaths:106,
  todayDeaths:0,
  recovered:7487,
  todayRecovered:32,
  active:1296,
  critical:8,
  tests:2853342,
  population:25504621
}

  // the very first time .toMatchSnapshot run, it generates a .snap file in __snapshots__ folder
  // the .snap file will be the source of true that everytime this test run against to.
  // If you make any change e.g. change div tag to p tag in source code. This test is going to fail
  // If it is what you want, press 'u' key in test console to regenerate snapshot 
it('should render (with enyzme shallow)', () => {
  const wrapper = shallow(<CovidCountryCard data={testData} />);
  expect(wrapper).toMatchSnapshot();
})

// similar to shallow, render generate the snapshot in details as any custom components indside
// the wrapped component will be rendered.
// e.g. <Parent /> component contains <Child /> component. shallow outputs <Child /> in snapshot
// whereas render outputs whatever the HTML elements in <Child /> component in snapshot. 
it('should render (with enzyme render)', () => {
  const wrapper = render(<CovidCountryCard data={testData} />);
  expect(wrapper).toMatchSnapshot();
})

describe('Test CovideCountryCard', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<CovidCountryCard data={testData} />);
  });

  it('should display the country name correctly', () => {
    const countryName = wrapper.find('h3').text();
    expect(countryName).toEqual('Australia');;
  })

  it('should display the country flag', () => {
    const countryFlag = wrapper.find('img').prop('src');
    expect(countryFlag).toEqual('https://disease.sh/assets/img/flags/au.png');
  })

  it('should display the correct overall cases', () => {
    const overallCases = wrapper.find('span.overall-cases').text();
    expect(overallCases).toEqual('8,886');
  })

  it('should display the correct overall active', () => {
    const overallActive = wrapper.find('span.overall-active').text();
    expect(overallActive).toEqual('1,296');
  })

  it('should display the correct overall critical', () => {
    const overallCritical = wrapper.find('span.overall-critical').text();
    expect(overallCritical).toEqual('8');
  })

  it('should display the correct overall deaths', () => {
    const overallDeaths = wrapper.find('span.overall-deaths').text();
    expect(overallDeaths).toEqual('106');
  })

  it('should display the correct overall test', () => {
    const overallTests = wrapper.find('span.overall-tests').text();
    expect(overallTests).toEqual('2,853,342');
  })

  it('should display the correct today deaths', () => {
    const todayDeaths = wrapper.find('span.today-deaths').text();
    expect(todayDeaths).toEqual('0');
  })

  it('should display the correct today cases', () => {
    const todayCases = wrapper.find('span.today-cases').text();
    expect(todayCases).toEqual('131');
  })

});
