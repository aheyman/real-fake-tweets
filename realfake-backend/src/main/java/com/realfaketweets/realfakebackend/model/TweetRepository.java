package com.realfaketweets.realfakebackend.model;

import org.springframework.data.mongodb.repository.MongoRepository;


public interface TweetRepository extends MongoRepository<Tweet, String> {

    public Tweet findBy(String id);
}
