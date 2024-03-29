package com.metapop.backend.entity;

import com.metapop.backend.dto.UserCustomizingDTO.UserCustomizingUpdateDTO;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "usercustomizing")
@NoArgsConstructor
@Getter
@Setter
public class UserCustomizing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User player;

    @Column(nullable = false)
    private String custombody;

    @Column(nullable = false)
    private String customhair;

    @Column(nullable = false)
    private String customeye;

    @Column(nullable = false)
    private String customoutfit;

    @Builder
    public UserCustomizing(User user, String custombody, String customhair, String customeye, String customoutfit) {
        this.player = user;
        this.custombody = custombody;
        this.customhair = customhair;
        this.customeye = customeye;
        this.customoutfit = customoutfit;
    }

    public void update(UserCustomizingUpdateDTO userCustomizingUpdateDTO) {
        this.custombody = userCustomizingUpdateDTO.getCustombody();
        this.customhair = userCustomizingUpdateDTO.getCustomhair();
        this.customeye = userCustomizingUpdateDTO.getCustomeye();
        this.customoutfit = userCustomizingUpdateDTO.getCustomoutfit();
    }
}
