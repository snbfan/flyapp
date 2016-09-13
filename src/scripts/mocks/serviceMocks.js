export const HttpMock = function(successResponse) {
  return function(param) {
    return {
      success: (successCb) => {
        successCb(successResponse);

        return {
          error: (errorCb) => {}
        }
      }
    }
  }
};

export const ElementMock = () => {
  return {
    find: () => {
      return {
        click: () => {}
      }
    }
  }
}
