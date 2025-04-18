package bitc.fullstack503.jsy_react_spring.mapper;

import bitc.fullstack503.jsy_react_spring.dto.commentDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CommentMapper {
    List<commentDTO> findByPostId(int postIdx) throws Exception;

    void savecomment(commentDTO comment) throws Exception;
}
