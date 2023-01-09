exports.handler = async (event) => {
    console.log("test1","test2");
    console.log("test1","test2");
    await console.log('Hello World!');
    console.error("Hello1");
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello World!'),
    };
    return response;
};
