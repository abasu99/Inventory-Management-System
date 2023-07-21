package com.casestudy.inventory.service;

import com.casestudy.inventory.model.Inventory;
import com.casestudy.inventory.model.ResetInventory;

import java.util.List;

public interface ResetInvService {
    public ResetInventory save(ResetInventory resetInventory);
    public List<ResetInventory> getResetInv();

    public Inventory isInventoryPresent(int locationNbr, String materialId);

    public void deleteResetInv(int id);



}
