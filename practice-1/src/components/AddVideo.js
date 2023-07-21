function AddVideo() {

    return(
        <form>
            <input type="text" />
            <input type="text"/>
            <button onClick={()=> {
        //   setVideos([...videos,{id:videos.length+1,
        //     title: 'Mongo DB tutorial',
        //     views: '999K',
        //     time: '2 year ago',
        //     channel: 'Mehul Kumar',
        //     verified: true ,}])
        }}>Add Video</button>
        </form>
    )

}

export default AddVideo;