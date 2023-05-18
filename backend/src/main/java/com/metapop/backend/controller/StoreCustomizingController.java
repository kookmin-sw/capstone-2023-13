package com.metapop.backend.controller;

import com.metapop.backend.dto.StoreCustomizingDTO.StoreCustomizingSaveDTO;
import com.metapop.backend.dto.StoreCustomizingDTO.StoreCustomizingUpdateDTO;
import com.metapop.backend.entity.StoreCustomizing;
import com.metapop.backend.service.StoreCustomizingService;
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
    private StoreCustomizingService storeCustomizingService;

    @Operation(summary = "", description = "상점 커스터마이징 등록 API")
    @PostMapping("/register")
    public ResponseEntity<String> registration(@RequestBody StoreCustomizingSaveDTO storeCustomizingSaveDTO) {
        return ResponseEntity.ok(storeCustomizingService.registration(storeCustomizingSaveDTO));
    }

    @Operation(summary = "", description = "상점 커스터마이징 정보 조회 API")
    @GetMapping("/info/{store_id}")
    public StoreCustomizing info(@PathVariable Long store_id) {
        return storeCustomizingService.info(store_id);
    }

    @Operation(summary = "", description = "상점 커스터마이징 정보 수정 API")
    @PutMapping("/update/{store_id}")
    public StoreCustomizing update(@PathVariable Long store_id, @RequestBody StoreCustomizingUpdateDTO storeCustomizingUpdateDTO) {
        return storeCustomizingService.update(store_id, storeCustomizingUpdateDTO);
    }
}
