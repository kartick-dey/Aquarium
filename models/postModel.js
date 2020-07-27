class PostModel {
    constructor(
        username,
        fishCenter,
        postedTime,
        followStatus,
        imageUrl,
        fishType,
        fishName,
        price,
        unit,
        location,
        transport,
        exportDate
    ){
        this.username = username;
        this.fishCenter = fishCenter;
        this.postedTime = postedTime;
        this.followStatus = followStatus;
        this.imageUrl = imageUrl;
        this.fishType = fishType;
        this.fishName = fishName;
        this.price = price;
        this.unit = unit;
        this.location = location;
        this.transport = transport;
        this.exportDate = exportDate

    }
}
export default PostModel;