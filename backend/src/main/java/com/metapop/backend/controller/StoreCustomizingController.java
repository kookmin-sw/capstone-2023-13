package com.metapop.backend.controller;

import com.metapop.backend.dto.StoreCustomizingDTO.StoreCustomizingSaveDTO;
import com.metapop.backend.service.StoreCustomzingService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "storecustomizing", description = "상점 커스터마이징 API")
@RestController
@RequestMapping("storecustomizings")
@CrossOrigin(origins = "*")
public class StoreCustomizingController {

    @Autowired
    private StoreCustomzingService storeCustomzingService;

    @Operation(summary = "", description = "유저 커스터마이징 등록 API")
    @PostMapping("/register")
    public ResponseEntity<String> registration(@RequestBody StoreCustomizingSaveDTO storeCustomizingSaveDTO) {
        return ResponseEntity.ok(storeCustomzingService.registration(storeCustomizingSaveDTO));
    }
}
