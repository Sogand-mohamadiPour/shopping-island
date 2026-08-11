import { Bars } from 'react-loader-spinner'
function Loading() {
    return (
            <Bars
                height="200"
                width="200"
                color="#4fa94d"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
    )
}

export default Loading
