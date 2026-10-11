# Gram–Schmidt Orthogonalization

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** LA-02  
**Level:** Introductory    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

Given linearly independent $v_1,\ldots,v_k$ in a real or complex inner-product space, prove Gram–Schmidt produces orthonormal $q_1,\ldots,q_k$ with equal prefix spans: $\operatorname{span}(q_1,\ldots,q_j)=\operatorname{span}(v_1,\ldots,v_j)$.

**Foundations and permitted imports:**

The inner product is linear in its first argument and conjugate-linear in its second, so projection onto unit q is⟨v,q⟩q. Given vectors v₁,…,v_k are linearly independent. Use positivity of the norm, Pythagoras, and finite induction; the ambient inner-product space may be larger or infinite-dimensional.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Orthogonal residual construction
N2 [v1] Prefix-span induction
  N1 -- E1: Each new q_j is defined and orthogonal to all previous q_i. --> N2
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | Each new q_j is defined and orthogonal to all previous q_i. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |

## 3. Node roles and faculty activities

### N1/v1 — Orthogonal residual construction

**Object, role, and local target:** Remove precisely the old-span component. The required export is: Each new q_j is defined and orthogonal to all previous q_i.

**Inputs:** Independent input vectors; existing orthonormal prefix; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `LA-02.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain Independent input vectors; existing orthonormal prefix; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Remove precisely the old-span component. |
| Sense | Do not divide by a zero residual when input vectors are dependent. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** Each new q_j is defined and orthogonal to all previous q_i. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Prefix-span induction

**Object, role, and local target:** Prove both span inclusions at every prefix. The required export is: An orthonormal list with all requested prefix-span equalities.

**Inputs:** Residual formula and nonzero normalization; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `LA-02.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain Residual formula and nonzero normalization; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Prove both span inclusions at every prefix. |
| Sense | Only the span is canonical; signs/phases and input order can change the basis. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** An orthonormal list with all requested prefix-span equalities. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Orthogonal residual construction

1. Set w₁=v₁ and q₁=w₁/‖w₁‖.

2. Suppose q₁,…,q_(j−1) are orthonormal with the same prefix span as the first j−1 inputs.

3. Define w_j=v_j−∑_{i<j}⟨v_j,q_i⟩q_i.

4. For ℓ<j, inner-product linearity gives⟨w_j,q_ℓ⟩=⟨v_j,q_ℓ⟩−⟨v_j,q_ℓ⟩=0.

5. If w_j=0 then v_j is in the preceding input span, contradicting independence.

6. Hence q_j=w_j/‖w_j‖ is defined and has unit norm.

### §4.N2 — Prefix-span induction

1. The residual formula places q_j inspan(v₁,…,v_j), since earlier q_i are in the preceding span.

2. Conversely v_j=‖w_j‖q_j+∑_{i<j}⟨v_j,q_i⟩q_i, so v_j belongs tospan(q₁,…,q_j).

3. Earlier spans already coincide by induction.

4. Thus both inclusions hold and the prefix spans agree.

5. Induction completes the construction for all j; the empty input list gives an empty orthonormal list.

## 5. Worked instance and boundary audit

For v₁=(1,1), v₂=(1,0) inR², q₁=(1,1)/√2. The second residual is(1/2,−1/2), so q₂=(1,−1)/√2. Both prefixes have the asserted spans, and the projection coefficient for v₂ is 1/√2.

**Boundary or failed-argument audit:**

For v₂=2v₁ the second residual is 0. Sense detects the failed independence condition before normalization. A modified algorithm may discard dependent vectors and compute a basis of the span, but that is a different output contract.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `LA-02`, version 1, and the proof with every reuse. Intermediate exports E1–E2 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

The elementary argument is developed here from the explicitly declared foundations and local imports.

[Branch index](../README.md)
