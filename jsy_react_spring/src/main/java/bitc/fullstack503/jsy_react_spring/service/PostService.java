package bitc.fullstack503.jsy_react_spring.service;

import bitc.fullstack503.jsy_react_spring.dto.postDTO;

import java.util.List;

public interface PostService {
    List<postDTO> findAll() throws Exception;

    postDTO findById(int postIdx) throws Exception;

    void save(postDTO post) throws Exception;

    void deleteById(int postIdx) throws Exception;

    void update(postDTO post) throws Exception;
}
