package bitc.fullstack503.jsy_react_spring.dto;

import lombok.Data;

@Data
public class commentDTO {
    private int commentIdx;
    private int postId;
    private String text;
}
