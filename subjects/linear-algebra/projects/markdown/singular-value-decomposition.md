# Singular Value Decomposition

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** LA-04  
**Level:** Intermediate    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

For every real $m\times n$ matrix $A$, prove $A=U\Sigma V^T$ with orthogonal $U,V$ and rectangular diagonal $\Sigma$ having nonnegative singular values.

**Foundations and permitted imports:**

Import LA-03: every real symmetric matrix has an orthonormal eigenbasis. Import orthonormal completion from LA-02 and LA-01’s finite-dimensional kernel/rank facts. For A:Rⁿ→Rᵐ, the matrix AᵀA is symmetric positive semidefinite. U andV are square orthogonal matrices; Σ is m×n with nonnegative entries on its rectangular diagonal.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Right singular directions
N2 [v1] Left singular directions
  N1 -- E1: An orthonormal right basis with Av_i=0 for i>r. --> N2
N3 [v1] Factorization closure
  N1 -- E1: An orthonormal right basis with Av_i=0 for i>r. --> N3
  N2 -- E2: A full orthonormal left basis whose first r vectors match positive singular directions. --> N3
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | An orthonormal right basis with Av_i=0 for i>r. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T1-3 | N1/v1, E1 | An orthonormal right basis with Av_i=0 for i>r. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T2-3 | N2/v1, E2 | A full orthonormal left basis whose first r vectors match positive singular directions. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N2 |

## 3. Node roles and faculty activities

### N1/v1 — Right singular directions

**Object, role, and local target:** Order positive eigenvalues before zero ones. The required export is: An orthonormal right basis with Av_i=0 for i>r.

**Inputs:** Spectral theorem on AᵀA; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `LA-04.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain Spectral theorem on AᵀA; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Order positive eigenvalues before zero ones. |
| Sense | Negative eigenvalues cannot occur; tiny computed negatives are numerical errors, not theorem data. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** An orthonormal right basis with Av_i=0 for i>r. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Left singular directions

**Object, role, and local target:** Normalize only nonzero images. The required export is: A full orthonormal left basis whose first r vectors match positive singular directions.

**Inputs:** Positiveσ_i and right eigenvectors; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `LA-04.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain Positiveσ_i and right eigenvectors; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Normalize only nonzero images. |
| Sense | The zero singular values require completion, not normalization. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** A full orthonormal left basis whose first r vectors match positive singular directions. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

### N3/v1 — Factorization closure

**Object, role, and local target:** Check the equality on every basis vector. The required export is: The full real rectangular SVD with nonnegative singular values.

**Inputs:** Both orthonormal bases; prior exports E1/v1, E2/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `LA-04.N3`; publish E3 only after the stated local target is established. |
| Memory | Retain Both orthonormal bases; prior exports E1/v1, E2/v1; keep their assumptions and versions attached. |
| Intellect | Check the equality on every basis vector. |
| Sense | No uniqueness of U orV is asserted. |
| Action | Execute the numbered mathematical activities in §4.N3, including its displayed identities and logical implications. |

**Export E3/v1:** The full real rectangular SVD with nonnegative singular values. Evidence is the authored argument in §4.N3, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N3 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E3, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E3. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Right singular directions

1. Let v₁,…,v_n be an orthonormal eigenbasis of AᵀA with eigenvaluesλ_i.

2. Since v_iᵀAᵀAv_i=‖Av_i‖²≥0, allλ_i≥0.

3. Arrangeλ₁,…,λ_r>0 and the rest zero; putσ_i=√λ_i.

4. Forλ_i=0, ‖Av_i‖²=0, so Av_i=0.

5. Moreover ker(AᵀA)=kerA by this same norm identity, so r=rankA.

### §4.N2 — Left singular directions

1. For i≤r define u_i=Av_i/σ_i.

2. Then u_iᵀu_j=v_iᵀAᵀAv_j/(σ_iσ_j)=λ_jδ_ij/(σ_iσ_j)=δ_ij.

3. Thus these r vectors are orthonormal inRᵐ, in particular r≤m.

4. Complete them to an orthonormal basis u₁,…,u_m without attempting to divide zero images by zero singular values.

### §4.N3 — Factorization closure

1. Let V have columnsv_i, U have columnsu_i, and Σ haveσ_i at(i,i) for i≤r and zeros elsewhere.

2. For i≤r, UΣVᵀv_i=σ_i u_i=Av_i; for i>r both sides vanish.

3. Since v_i form a basis, A=UΣVᵀ.

4. This includes A=0 and rectangular dimensions.

5. The sorted singular values are determined by the eigenvalues of AᵀA; bases in repeated or zero eigenspaces need not be unique.

## 5. Worked instance and boundary audit

For A=[[3,0],[0,0],[0,0]], take V=I₂,U=I₃ and Σ=A. The singular values are3 and 0; only the first left vector comes from normalizing Av₁. The other two are an orthonormal completion.

**Boundary or failed-argument audit:**

Trying u_i=Av_i/σ_i at σ_i=0 is undefined even for the zero matrix. Sense returns that boundary test; Memory supplies the kernel identity, and Action completes an orthonormal basis for the remaining directions.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `LA-04`, version 1, and the proof with every reuse. Intermediate exports E1–E3 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

The elementary argument is developed here from the explicitly declared foundations and local imports.

[Branch index](../README.md)
