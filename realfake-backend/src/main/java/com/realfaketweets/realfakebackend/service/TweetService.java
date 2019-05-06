package com.realfaketweets.realfakebackend.service;

import com.realfaketweets.realfakebackend.model.TweetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TweetService {

    @Autowired
    private TweetRepository repository;

}
