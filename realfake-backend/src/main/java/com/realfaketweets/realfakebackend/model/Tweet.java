package com.realfaketweets.realfakebackend.model;


import lombok.Value;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.sql.Date;
import java.sql.Timestamp;

@Value
@Document(collection = "tweets")
public class Tweet {

    @Id
    private String _id;

    @Field("id_str")
    private String idStr;

    @Field("created_at")
    private org.bson.BsonDateTime  createdAt;

    @Field("text")
    private String text;

    @Field("in_reply_to_screen_name")
    private String inReplyToScreenName;

    @Field("retweet_count")
    private Integer retweetCount;

    @Field("favorite_count")
    private Integer favoriteCount;

    @Field("source")
    private String source;

    @Field("is_retweet")
    private boolean isRetweet;

    @Field("is_real")
    private boolean isReal;

}
