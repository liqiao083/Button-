it('should be throttled to clicked',()=>{
	const testInstance = ReactTestUtiles.renderIntoDocument(<Button>hello</Button>);
	const buttonDom = ReactTestUtiles.findRenderedDOMComponentWithClass(testInstance,'my-button');
	expect(testInstance.state.disabled).toBeTruthy();
	jest.handleButtonClick(response.ok);
	expect(testInstance.state.disabled).toBeTruthy();
	jest.handleButtonClick(!response.ok);
	expect(testInstance.state.disabled).toBeFalsy();
});