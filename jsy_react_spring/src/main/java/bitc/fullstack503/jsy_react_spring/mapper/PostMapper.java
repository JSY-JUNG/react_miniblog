package bitc.fullstack503.jsy_react_spring.mapper;

import bitc.fullstack503.jsy_react_spring.dto.postDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PostMapper {
    List<postDTO> findAll() throws Exception;

    postDTO findById(int id) throws Exception;

    void save(postDTO post) throws Exception;

    void deleteById(int postIdx) throws Exception;

    void update(postDTO post) throws Exception;
}
