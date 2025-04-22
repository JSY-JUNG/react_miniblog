package bitc.fullstack503.jsy_react_spring.service;


import bitc.fullstack503.jsy_react_spring.dto.postDTO;
import bitc.fullstack503.jsy_react_spring.mapper.PostMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceImpl implements PostService {


    @Autowired
    private PostMapper postMapper;

    @Override
    public List<postDTO> findAll() throws Exception {
        return postMapper.findAll();
    }

    @Override
    public postDTO findById(int postIdx) throws Exception {
        return postMapper.findById(postIdx);
    }

    @Override
    public void save(postDTO post) throws Exception {
        postMapper.save(post);
    }

    @Override
    public void deleteById(int postIdx) throws Exception {
        postMapper.deleteById(postIdx);
    }

    @Override
    public void update(postDTO post) throws Exception {
        postMapper.update(post);
    }
}
